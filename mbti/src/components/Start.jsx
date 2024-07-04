import { useNavigate } from 'react-router-dom';
import bannerImage from '../assets/짱구배너.png';

function Start() {
  const navigate = useNavigate();

  return (
    <div className="content" id="start">
      <p>나와 닮은 짱구 캐릭터 테스트</p>
      <img src={bannerImage} className="img" />
      <p id="maker">제작자: 이나경</p>
      <button className="btn btn-warning" onClick={() => navigate('/question')}>
        떡잎마을로 출발~
      </button>
    </div>
  );
}

export default Start;