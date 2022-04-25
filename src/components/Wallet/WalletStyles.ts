import styled from "styled-components";
import {Currencies} from "../../constants";

const handleColorType = (color: string) => {
    switch (color) {
        case Currencies.RUB:
            return "radial-gradient(circle, rgba(179, 63, 251, 1) 10%, rgba(252, 70, 70, 1) 55%)";
        case Currencies.EUR:
            return "radial-gradient(circle, rgba(63,251,202,1) 10%, rgba(134,70,252,1) 55%)";
        case Currencies.BYN:
            return "radial-gradient(circle, rgba(146,251,63,1) 10%, rgba(252,70,233,1) 55%)";
        case Currencies.USD:
            return "radial-gradient(circle, rgba(251,239,63,1) 10%, rgba(70,107,252,1) 55%)";
        default:
            return "radial-gradient(circle, rgba(63,95,251,1) 10%, rgba(70,252,76,1) 55%)";
    }
};

export const WalletWrapper = styled.div`
  width: 66px;
  min-height: 66px;
`;

export const WalletCircle = styled.div`
  border-radius: 50%;
  background: ${({color}) => handleColorType(color || 'default')};
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const WalletCircleCurrency = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
`;

export const WalletName = styled.p`
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
`;