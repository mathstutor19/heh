import React from 'react';
import './Apply.css';
function Apply() {
  return (
    <section className="apply">
      <div className="apply__left">
        <h2 className="apply__left__title">
          Apply now for free membership to be one of our first users!
        </h2>
      </div>
      <div className="apply__right">
        <form className="apply__form" action="">
          <input
            type="text"
            className="apply__input"
            placeholder="First name"
          />
          <input type="text" className="apply__input" placeholder="Last name" />
          <select
            name="cars"
            id="cars"
            defaultValue="hello"
            className="apply__input select__input"
          >
            <option value="choose">Choose gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            type="text"
            className="apply__input"
            placeholder="Current ocupation"
          />
          <input
            type="Email"
            className="apply__input"
            placeholder="Email address"
          />
          <input
            type="text"
            className="apply__input"
            placeholder="Phone number"
          />
          <textarea
            placeholder="Why do you want to become a member of the HEH Networks? *"
            name=""
            id=""
            className="apply__textarea"
          ></textarea>

          <div className="checkbox checkbox-one">
            <input type="checkbox" id="checkbox" name="" value="" />
            <label htmlFor="checkbox">
              <p>
                I am committed to the free-democratic basic order within the
                meaning of the Basic Law and confirm that I am not/have not been
                a member of a group that is observed by the Office for the
                Protection of the Constitution - this includes in particular the
                AfD and the Identitarian Movement (cf. the terms and conditions
                regarding contractual penalties in the event of incorrect
                information)
              </p>
            </label>
          </div>

          <div className="checkbox checkbox-two">
            <input type="checkbox" id="checkbox2" name="" value="" />
            <label htmlFor="checkbox2">
              <p>
                I have read the{' '}
                <u className="apply__underline__text">General Terms</u> and
                Conditions and the
                <u className="apply__underline__text"> Privacy Policy</u> and
                hereby agree.
              </p>
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="checkbox3" name="" value="" />
            <label htmlFor="checkbox3">
              <p>
                I would like to be informed about the further course of the
                project and receive the free HEH newsletter (Optional).
              </p>
            </label>
          </div>
        </form>
        <button type="submit" className="apply__button">
          Apply for Membership
        </button>
      </div>
    </section>
  );
}

export default Apply;
