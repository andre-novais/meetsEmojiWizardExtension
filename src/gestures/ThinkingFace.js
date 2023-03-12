import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

// TODO: FIX THIS DETECTION

// describe thinking face gesture 🤔
const thinkingFaceDescription = new GestureDescription('thinking_face');

// thumb:
// - curl: none (must)
// - direction vertical down (best)
// - direction diagonal down left / right (acceptable)
thinkingFaceDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thinkingFaceDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
thinkingFaceDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
thinkingFaceDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

// index:
// - curl: none (must)
// - direction vertical down (best)
// - direction diagonal down left / right (acceptable)
thinkingFaceDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
thinkingFaceDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
thinkingFaceDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);

// all other fingers:
// - curled (best)
// - half curled (acceptable)
// - pointing down is NOT acceptable
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thinkingFaceDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thinkingFaceDescription.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// require the middle finger to be somewhat left or right pointing
// but NOT down and NOT fully up
thinkingFaceDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
thinkingFaceDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
thinkingFaceDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.9);
thinkingFaceDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.9);

export default thinkingFaceDescription;
