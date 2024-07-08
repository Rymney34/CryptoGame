import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react"
import { checkEmailString, checkPasswordString, checkUsername, hasTrueValue } from "../services/validation/validation"

const RegistrationPage = () => {

  const [form, setForm] = useState({
    username: '',
    password: '',
    email:''
  })

  const [error, setError] = useState({
    username: {
      status: true,
      helper: 'Must be more than 3 characters'
    },
    password: {
      status: true,
      helper: 'Must be more than 8 characters and contain symbol, numbr and capital letter'
    },
    email: {
      status: true,
      helper: 'Invalid email format, must be like example@exampl.ex'
    }
  })

  const ErrorStatus = (event) => {
    return event.target.name === 'username'
      ? checkUsername(event.target.value)
      : event.target.name === 'password'
        ? checkPasswordString(event.target.value)
        : event.target.name === 'email'
          ? checkEmailString(event.target.value)
          : true
    }

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    const errors = ErrorStatus(event)
    console.log(errors)
    setError({
      ...error,
      [event.target.name]: {
        status: errors.status,
        helper: errors.helper
      }
    })
  }

  const onRegistred = () => {
    
  }

  return (
    <Box sx={{
        margin: '10em',
        width: '60em',
        display: 'flex',
        padding: '2em',
        flexDirection: 'column',
        justifyContent: 'space-between',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderRadius: '1em'
    }}>
      <Typography  variant="h5" textAlign={'center'}>REGISTRATION</Typography>
      <Divider orientation="horizontal" sx={{my: 5 }} />
      <TextField
        required
        error={error.username.status}
        helperText={error.username.helper}
        value={form.username}
        variant="outlined"
        name="username"
        label="USERNAME"
        onChange={handleFormChange}
      />
      <Divider orientation="horizontal" sx={{my: 5 }} />
      <TextField
        required
        error={error.password.status}
        helperText={error.password.helper}
        value={form.password}
        variant="outlined"
        name="password"
        label="PASSWORD"
        onChange={handleFormChange}
      />
      <Divider orientation="horizontal" sx={{ my: 5 }} />
      <TextField
        required
        error={error.email.status}
        helperText={error.email.helper}
        value={form.email}
        variant="outlined"
        name="email"
        label="E-MAIL"
        onChange={handleFormChange}
      />
      <Divider orientation="horizontal" sx={{ my: 5 }} />
      <Stack direction='row' justifyContent={'space-between'}>
        <Link to={'/login'}>
          <Button variant="contained" color="success">Cancel</Button>
        </Link>
            <Button disabled={hasTrueValue(error)} variant="outlined" color="success">Save</Button>
        </Stack>
    </Box>
  )
}

export default RegistrationPage