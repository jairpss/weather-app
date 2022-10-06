import React from 'react'

const Form = () => {
  return (
    <div className="container">
        <form>
            <div className="field">
                <label htmlFor="city">City</label>
                <input 
                    type="text"
                    id="city"
                    name="city"
                />
            </div>

            <div className="field">
                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                    <option value="">--Select a country--</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <input 
                type="submit"
                value="Get weather"
            />
        </form>
    </div>
  )
}

export default Form