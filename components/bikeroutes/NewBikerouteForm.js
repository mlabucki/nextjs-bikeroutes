import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewBikerouteForm.module.css';

function NewBikerouteForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const cityInputRef = useRef();
  const distanceInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredDistance = distanceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const bikerouteData = {
      title: enteredTitle,
      image: enteredImage,
      distance: enteredDistance,
      city: enteredCity,
      description: enteredDescription,
    };

    props.onAddBikeroute(bikerouteData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Bikeroute Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Bikeroute Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Location</label>
          <input type='text' required id='city' ref={cityInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Distance</label>
          <input type='text' required id='distance' ref={distanceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Route</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBikerouteForm;
