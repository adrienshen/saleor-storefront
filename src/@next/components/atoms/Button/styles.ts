import { media, styled } from "@styles";
import { Size } from "./types";

interface ISize {
  size: Size;
}

interface IFontSize {
  size: Size;
  theme: {
    button: { typography: { fontSize: string; smallFontSize: string } };
  };
}
const padding = {
  md: "0.9rem 3.7rem",
  sm: "0.1rem 2rem",
};

const fontSize = (fontSize: string, smallFontSize: string) => ({
  md: fontSize,
  sm: smallFontSize,
});

export const Primary = styled.button<{
  color: "primary" | "secondary";
  fullWidth?: boolean;
  size: Size;
}>`
  background-color: #bfad71;
  padding: ${(props: ISize) => padding[props.size]};
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.button.colors[props.color].color};
  width: ${props => (props.fullWidth ? "100%" : "auto")}

  &:hover {
    color: ${props => props.theme.button.colors[props.color].hoverColor};
  }

  &:active {
    box-shadow: -3px 3px 14px 0px rgba(129, 67, 67, 0.2);
  }

  &:disabled {
    background-color: ${props => props.theme.colors.disabled};

    &,
    &:hover {
      cursor: default;
    }
  }

  ${media.smallScreen`
    padding:  0.9rem 1rem;
    width: ${(props: { fullWidth: boolean }) =>
      props.fullWidth ? "100%" : "88%"};
  `}
`;

export const Secondary = styled(Primary)`
  background-color: transparent;
  ${props => props.theme.button.colors.secondary.color};
  border: 2px solid #bfad71;
  color: #bfad71;

  &:hover {
    color: #bfad71;
  }
`;

export const Text = styled.span<{ size: Size }>`
  display: inline-block;
  font-size: ${({
    size,
    theme: {
      button: { typography },
    },
  }: IFontSize) =>
    fontSize(typography.fontSize, typography.smallFontSize)[size]};
  font-weight: 400;
  line-height: ${props => props.theme.typography.baseLineHeight};
`;
