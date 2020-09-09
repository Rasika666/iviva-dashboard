import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {useDispatch, useSelector} from 'react-redux'
import {updateLoadingValue} from '../actions/radioGroupAction'

function RadioButtonGroup() {

	const dispatch = useDispatch();
	const value = useSelector(state => state.radioGroup.loadedValue);

    const handleChange = (event) => {
		updateLoadingValue(dispatch, event.target.value);
		
    };


    return (
			<FormControl component="fieldset">
			<FormLabel component="legend">Maximum data points</FormLabel>
					<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
						<FormControlLabel value="10" control={<Radio />} label="10" />
						<FormControlLabel value="20" control={<Radio />} label="20" />
						<FormControlLabel value="30" control={<Radio />} label="30" />
						<FormControlLabel value="40" control={<Radio />} label="40" />
						<FormControlLabel value="50" control={<Radio />} label="50" />
						<FormControlLabel value="60" control={<Radio />} label="60" />
						<FormControlLabel value="70" control={<Radio />} label="70" />
						<FormControlLabel value="80" control={<Radio />} label="80" />
						<FormControlLabel value="90" control={<Radio />} label="90" />
						<FormControlLabel value="100" control={<Radio />} label="100" />
				</RadioGroup>
			</FormControl>
    )
}

export default RadioButtonGroup;
