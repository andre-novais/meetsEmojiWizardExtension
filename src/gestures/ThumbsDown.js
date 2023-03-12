import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture 👎
const thumbsDownDescription = new GestureDescription('thumbs_down');

// thumb:
// - curl: none (must)
// - direction vertical down (best)
// - direction diagonal down left / right (acceptable)
thumbsDownDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsDownDescription.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
thumbsDownDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.9);
thumbsDownDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.9);

// all other fingers:
// - curled (best)
// - half curled (acceptable)
// - pointing down is NOT acceptable
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsDownDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thumbsDownDescription.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// require the index finger to be somewhat left or right pointing
// but NOT down and NOT fully up
thumbsDownDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
thumbsDownDescription.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
thumbsDownDescription.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
thumbsDownDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

export default thumbsDownDescription;
