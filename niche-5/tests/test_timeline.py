import json
import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]

class TimelineTest(unittest.TestCase):
    def test_no_branding_or_chapter_overlays(self):
        for name in ("SceneFrame.tsx", "Root.tsx", "MovingIllustration.tsx"):
            source = (ROOT / "src" / name).read_text().lower()
            self.assertNotIn("new horizons", source)
            self.assertNotIn("chapter", source)

    def test_voiceover_fits_four_minute_timeline(self):
        scenes = json.loads((ROOT / 'src/content.json').read_text())
        timing = json.loads((ROOT / 'public/timing.json').read_text())
        self.assertEqual(sum(scene['seconds'] for scene in scenes), 240)
        self.assertEqual(len(scenes), len(timing))
        cursor = 0
        for scene, audio in zip(scenes, timing):
            self.assertEqual(scene['id'], audio['id'])
            self.assertEqual(audio['startMs'], cursor)
            self.assertLessEqual(audio['audioDurationMs'], scene['seconds'] * 1000 - 500)
            cursor += audio['durationMs']
        self.assertEqual(cursor, 240000)

if __name__ == '__main__':
    unittest.main()
