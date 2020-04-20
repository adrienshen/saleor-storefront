import React from "react";

import { Icon } from "@components/atoms";
import { useHandlerWhenClickedOutside } from "@hooks";

import { Link } from "react-router-dom";
import * as S from "./styles";
import { IProps } from "./types";

export const AccountMenuMobile: React.FC<IProps> = ({
  links,
  active,
}: IProps) => {
  const [showMenu, setShowMenu] = React.useState(true);

  return (
    <S.Wrapper>
      {active
        .replace(/\//g, "")
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ")}
      <Icon name="select_arrow" size={8} />
      {showMenu && (
        <S.Overlay>
          {links.map(link => {
            const menuItem = link
              .replace(/\//g, "")
              .replace("-", " ")
              .split(" ")
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ");
            return (
              <div key={link}
              >
                <Link to={link}>
                  <S.MenuItem active={active === link}>
                  ICON | {menuItem}
                  </S.MenuItem>
                </Link>
              </div>
            );
          })}
        </S.Overlay>
      )}
    </S.Wrapper>
  );
};
