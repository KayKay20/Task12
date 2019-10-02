import React from 'react';


const Form = props => (
<section>
	<form  className="col50"  onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..." className="Input" /><br/><br/>
		<input type="text" name="country" placeholder="Country..." className="Input" /><br/>
		<button className="primary-btn">Search</button>	
	</form>
	</section>

	);
export default Form;
	