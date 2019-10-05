import React from 'react';

function Slot(props) {
  return (
    <section className={props.class}>Slot-{props.index}
    </section>
  );
}

export default Slot;
