import React, {Component} from 'react';
import './styles.css'

class App extends Component {
    constructor() {
        super()
        this.emptyForm = {
            firstName: '',
            lastName: '',
            email: '',
            place: '',
            phone: '',
            food: '',
            about: ''
        }
        this.state = {
            form: this.emptyForm,
            badges: []
        }
    }

    handleChange = ({target:{name,value}}) => {     
      this.setState(prev=>({
        form: {
          ...prev.form,
          [name]: value,
        }
      }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prev=>{
          let newBadges = prev.badges
          newBadges.push(prev.form)
          return {
            form: this.emptyForm,
            badges: newBadges
          }
        },() => {
          console.log(this.state.badges)
        })
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form'>
                    <h3 className='grid-full-width'>Name Badge</h3>
                    <input type="text" name="firstName"
                        placeholder='First Name'
                        value={this.state.form.firstName}
                        onChange={this.handleChange}/>
                    <input type="text" name="lastName" 
                        placeholder='Last Name'
                        value={this.state.form.lastName}
                        onChange={this.handleChange} />
                    <input type="email" name="email" 
                        placeholder='Email'
                        value={this.state.form.email}
                        onChange={this.handleChange} />
                    <input type="text" name="place" 
                        placeholder='Place of birth'
                        value={this.state.form.place}
                        onChange={this.handleChange} />
                    <input type="text" name="phone" 
                        placeholder='Phone Number'
                        value={this.state.form.phone}
                        onChange={this.handleChange} />
                    <input type="text" name="food" 
                        placeholder='Favorite Food'
                        value={this.state.form.food}
                        onChange={this.handleChange} />
                    <textarea
                        className='grid-full-width'
                        name="about"
                        cols="30"
                        rows="5"
                        placeholder='Tell us about yourself'
                        value={this.state.form.about}
                        onChange={this.handleChange}></textarea>
                    <div className='grid-full-width'>
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default App;
