import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
    </LoadingContainer>
  );
};

export default Loading;

const loadingCircle1 = keyframes`
  0% {
    transform: translateX(20px);
    z-index: 5;
    opacity: 0.5;
  }
  20% {
    transform: translateX(0px);
    z-index: 1;
    opacity: 1;
  }
  40% {
    transform: translateX(-20px);
    z-index: 3;
    opacity: 0.5;
  }
  60% {
    transform: translateX(20px);
    z-index: 5;
    opacity: 0.5;
  }
  80% {
    transform: translateX(0px);
    z-index: 1;
    opacity: 1;
  }
  100% {
    transform: translateX(-20px);
    z-index: 3;
    opacity: 0.5;
  }
`;

const loadingCircle2 = keyframes`
0% {
  transform: translateX(-20px);
  z-index: 3;
  opacity: 0.5;
}
20% {
  transform: translateX(20px);
  z-index: 5;
  opacity: 0.5;
}
40% {
  transform: translateX(0px);
  z-index: 1;
  opacity: 1;
}
60% {
  transform: translateX(-20px);
  z-index: 3;
  opacity: 0.5;
}
80% {
  transform: translateX(20px);
  z-index: 5;
  opacity: 0.5;
}
100% {
  transform: translateX(0px);
  z-index: 1;
  opacity: 1;
}
`;

const loadingCircle3 = keyframes`
0% {
  transform: translateX(0px);
  z-index: 1;
  opacity: 1;
}
20% {
  transform: translateX(-20px);
  z-index: 3;
  opacity: 0.5;
}
40% {
  transform: translateX(20px);
  z-index: 5;
  opacity: 0.5;
}
60% {
  transform: translateX(0px);
  z-index: 1;
  opacity: 1;
}
80% {
  transform: translateX(-20px);
  z-index: 3;
  opacity: 0.5;
}
100% {
  transform: translateX(20px);
  z-index: 5;
  opacity: 0.5;
}
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .circle {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #666bdb;
  }
  .circle1 {
    transform: translateX(20px);
    z-index: 5;
    animation: ${loadingCircle1} infinite 4s;
    opacity: 0.5;
  }
  .circle2 {
    transform: translateX(-20px);
    z-index: 3;
    animation: ${loadingCircle2} infinite 4s;
    opacity: 0.5;
  }
  .circle3 {
    z-index: 1;
    animation: ${loadingCircle3} infinite 4s;
  }
`;
