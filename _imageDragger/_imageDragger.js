import React, { useState } from 'react';

const ImageSelector = ({ imageUrl }) => {
  const [selection, setSelection] = useState({
    startX: null,
    startY: null,
    endX: null,
    endY: null,
  });

  const handleMouseDown = (e) => {
    setSelection({
      startX: e.clientX,
      startY: e.clientY,
      endX: null,
      endY: null,
    });
  };

  const handleMouseMove = (e) => {
    if (selection.startX !== null) {
      setSelection({
        ...selection,
        endX: e.clientX,
        endY: e.clientY,
      });
    }
  };

  const handleMouseUp = () => {
    // Do something with the selection coordinates
    console.log('Selected Area:', selection);
    setSelection({
      startX: null,
      startY: null,
      endX: null,
      endY: null,
    });
  };

  return (
    <div>
      <img
        src={imageUrl}
        alt="Selectable Image"
        style={{ cursor: 'crosshair' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      {selection.startX !== null && (
        <div
          style={{
            position: 'absolute',
            border: '1px dashed #000',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            top: selection.startY,
            left: selection.startX,
            width: selection.endX ? selection.endX - selection.startX : 0,
            height: selection.endY ? selection.endY - selection.startY : 0,
          }}
        />
      )}
    </div>
  );
};

export default ImageSelector;
