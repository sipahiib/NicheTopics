"""Delivery invariants guard narration sync and valid manual chapters."""
import json
import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


class DeliveryTests(unittest.TestCase):
    def test_continuous_timeline_and_headroom(self):
        timeline = json.loads((ROOT / "assets/weekly-ai-muse/timeline.json").read_text())
        cursor = 0
        self.assertEqual(len({s["id"] for s in timeline}), len(timeline))
        for scene in timeline:
            self.assertEqual(scene["start"], cursor)
            self.assertGreaterEqual(scene["frames"], scene["audioFrames"] + 18)
            cursor += scene["frames"]
        self.assertGreaterEqual(cursor, 120 * 30)
        self.assertLessEqual(cursor, 240 * 30)
        self.assertGreaterEqual(timeline[-1]["frames"], 600)

    def test_captions_stay_inside_delivery(self):
        srt = (ROOT / "assets/weekly-ai-muse/captions.en.srt").read_text()
        stamps = re.findall(r"(\d\d):(\d\d):(\d\d),(\d{3})", srt)
        times = [int(h)*3600+int(m)*60+int(s)+int(ms)/1000 for h,m,s,ms in stamps]
        self.assertGreater(len(times), 40)
        self.assertTrue(all(a <= b for a,b in zip(times,times[1:])))
        timeline = json.loads((ROOT / "assets/weekly-ai-muse/timeline.json").read_text())
        self.assertLessEqual(times[-1], sum(s["frames"] for s in timeline) / 30)

    def test_manual_chapters_and_language(self):
        package = json.loads((ROOT / "assets/weekly-ai-muse/publishing.json").read_text())
        chapters = re.findall(r"^(\d\d):(\d\d) .+$", package["description"], re.MULTILINE)
        times = [int(m) * 60 + int(s) for m, s in chapters]
        self.assertGreaterEqual(len(times), 3)
        self.assertEqual(times[0], 0)
        self.assertTrue(all(b - a >= 10 for a, b in zip(times, times[1:])))
        timeline = json.loads((ROOT / "assets/weekly-ai-muse/timeline.json").read_text())
        self.assertGreaterEqual(sum(s["frames"] for s in timeline) / 30 - times[-1], 10)
        self.assertEqual(package["defaultLanguage"], "en")
        self.assertEqual(package["defaultAudioLanguage"], "en-GB")
        self.assertIn("https://www.youtube.com/watch?v=71DQ6sR1wl0", package["description"])


if __name__ == "__main__":
    unittest.main()
