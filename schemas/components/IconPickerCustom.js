import React from 'react'
import PropTypes from 'prop-types'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import * as ReactIcons from 'react-icons/fa'

console.log(ReactIcons);

const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(String(value)))

function Icon(props){
  return(
    <>
      {props.value}
    </>
  )
}


class IconPickerCustom extends React.Component{

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired
    };

    render = () =>{
        const {type, value, onChange} = this.props
        return (
          <>
            <FormField label={type.title} description={type.description}>
              <input
                type="text"
                value={value === undefined ? '' : value}
                onChange={event => onChange(createPatchFrom(event.target.value))}
                ref={element => this._inputElement = element}
              />
            </FormField>
            {Object.values(ReactIcons).map(x =>{
              return (
                <>
              {console.log(x)}
              <Icon value={x}/>
              </>
              );
            })}
            {console.log(ReactIcons.Fa500Px)}
            <ReactIcons.Fa500Px/>
          </>
        )
    }
}

export default IconPickerCustom;