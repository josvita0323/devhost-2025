import React, { ReactNode } from 'react';

interface AboutCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const AboutCard = ({ children, className = '', onClick }: AboutCardProps) => {
  return (
    <>
      <style>
        {`
          .about-card-container {
            position: relative;
            width: 100%;
            min-height: 200px;
            transition: transform 0.3s ease;
            cursor: ${onClick ? 'pointer' : 'default'};
            overflow: hidden;
            border-radius: 8px;
          }
          
          .about-card-container:hover {
            transform: ${onClick ? 'scale(1.02)' : 'none'};
          }
          
          .svg-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }
          
          .svg-background svg {
            width: 100%;
            height: 100%;
          }
          
          .card-content {
            position: relative;
            z-index: 10;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1.5rem;
            box-sizing: border-box;
          }
          
          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .about-card-container {
              min-height: 150px;
            }
            
            .card-content {
              padding: 1rem;
            }
          }
          
          @media (max-width: 480px) {
            .about-card-container {
              min-height: 120px;
            }
            
            .card-content {
              padding: 0.75rem;
            }
          }
        `}
      </style>
      
      <div className={`about-card-container ${className}`} onClick={onClick}>
        <div className="svg-background">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 231 102" 
            preserveAspectRatio="none"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M229.86 81.5936L210.566 99.4754C210.202 99.813 209.725 100.003 209.228 100.008L75.0219 101.478C73.9088 101.49 73 100.591 73 99.478V96.5C73 95.3954 72.1046 94.5 71 94.5H35.1606C34.4429 94.5 33.7802 94.8846 33.4242 95.5077L30.5758 100.492C30.2198 101.115 29.5571 101.5 28.8394 101.5H9C7.89543 101.5 7 100.605 7 99.5V55.282C7 54.7792 6.81063 54.2949 6.46961 53.9254L1.53039 48.5746C1.18937 48.2051 1 47.7208 1 47.218V24.282C1 23.7792 1.18937 23.2949 1.53039 22.9254L6.46961 17.5746C6.81063 17.2051 7 16.7208 7 16.218V10C7 8.89543 7.89543 8 9 8H16.5H53.5H108.187C108.598 8 109 7.87317 109.336 7.63678L118.983 0.863217C119.319 0.626834 119.721 0.5 120.132 0.5H160C161.105 0.5 162 1.39543 162 2.5V6C162 7.10457 162.895 8 164 8H228.5C229.605 8 230.5 8.89543 230.5 10V80.1267C230.5 80.6835 230.268 81.2151 229.86 81.5936Z" 
              stroke="#C0FB45" 
              strokeWidth="0.5"
            />
          </svg> 
        </div>
        <div className="card-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default AboutCard;