"""Validate timing against real local narration duration without network requests."""
import json
import subprocess
import unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]

class DeliveryTests(unittest.TestCase):
    def test_timeline_matches_narration(self):
        parts=json.loads((ROOT/'assets/narration.json').read_text())
        timeline=json.loads((ROOT/'assets/timeline.json').read_text())
        self.assertEqual([p['id'] for p in parts],[p['id'] for p in timeline])
        cursor=0
        for shot in timeline:
            self.assertEqual(cursor,shot['start'])
            cursor+=shot['frames']
        self.assertGreater(cursor,120*30)
        self.assertLess(cursor,360*30)

    def test_voice_has_headroom(self):
        for shot in json.loads((ROOT/'assets/timeline.json').read_text()):
            path=ROOT/f"build/public/{shot['id']}.mp3"
            duration=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',str(path)]))
            self.assertGreaterEqual(shot['frames']/30-duration,0.59)

if __name__=='__main__':
    unittest.main()
