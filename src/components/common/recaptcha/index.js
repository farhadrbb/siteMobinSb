import ReCAPTCHA from "react-google-recaptcha"


export default function Index({ handelChange  , onExpired}) {

    function onChange(data) {
        handelChange(data)
    }

    return <ReCAPTCHA
        sitekey="6Lfsw-4bAAAAAG0rr2JRwYMwxx6elK792SbY7dfZ"
        onChange={onChange}
        onErrored={()=>alert('onErrored')}
        onExpired ={()=>onExpired()}
        render="explicit"
        hl="fa"
    />
}