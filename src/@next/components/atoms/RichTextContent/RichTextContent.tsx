import { sanitize } from "dompurify";
import draftToHtml from "draftjs-to-html";
import React from "react";
import { convertFromRaw } from "draft-js";
import { convertToHTML } from "draft-convert";
import { BLOCK_TYPE, ENTITY_TYPE } from "draftail";
import { IProps } from "./types";

export const RichTextContent: React.FC<IProps> = ({ descriptionJson }) => (
  <>
    {descriptionJson && (
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(
            convertToHTML(exporterConfig)(
              convertFromRaw(JSON.parse(descriptionJson))
            )
          ),
        }}
      />
    )}
  </>
);

const exporterConfig = {
  blockToHTML: block => {
    if (block.type === BLOCK_TYPE.BLOCKQUOTE) {
      return <blockquote />;
    }

    // Discard atomic blocks, as they get converted based on their entity.
    if (block.type === BLOCK_TYPE.ATOMIC) {
      return {
        start: "",
        end: "",
      };
    }

    return null;
  },

  entityToHTML: (entity, originalText) => {
    if (entity.type === ENTITY_TYPE.LINK) {
      return <a href={entity.data.url}>{originalText}</a>;
    }

    if (entity.type === ENTITY_TYPE.IMAGE) {
      return <img src={entity.data.src} alt={entity.data.alt} />;
    }

    if (entity.type === ENTITY_TYPE.HORIZONTAL_RULE) {
      return <hr />;
    }

    return originalText;
  },
};
