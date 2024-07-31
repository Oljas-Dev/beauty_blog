import styled from "styled-components";
import PropType from "prop-types";

import Tag from "./Tag";
import { formatDate } from "../utilities/helpers";

const StyledTagAndDate = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.span`
  font-size: 1.4rem;
  font-weight: 200;
`;

ItemsTagAndDate.propTypes = {
  tag: PropType.string,
  date: PropType.string,
};

function ItemsTagAndDate({ tag, date }) {
  return (
    <StyledTagAndDate>
      <Tag
        type={
          (tag === "beauty" && "pink") ||
          (tag === "lifestyle" && "blue") ||
          (tag === "fashion" && "orange")
        }
      >
        {tag}
      </Tag>
      <Date>{formatDate(date)}</Date>
    </StyledTagAndDate>
  );
}

export default ItemsTagAndDate;
