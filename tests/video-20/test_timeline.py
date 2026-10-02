"""Guard duration, narration headroom, and gap-free sequence boundaries."""
import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

class TimelineTests(unittest.TestCase):
    def test_delivery_duration_and_speech_headroom(self):
        timeline = json.loads((ROOT / 'assets/video-20/timeline.json').read_text())
        cursor = 0
        for scene in timeline:
            self.assertEqual(scene['start'], cursor)
            self.assertGreaterEqual(scene['frames'], scene['audioFrames'] + 12)
            cursor += scene['frames']
        self.assertGreaterEqual(cursor, 120 * 30)
        self.assertLessEqual(cursor, 180 * 30)
        self.assertEqual(len({s['id'] for s in timeline}), len(timeline))

if __name__ == '__main__':
    unittest.main()
