export const Moon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992zM17 4a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2M19 11h2m-1-1v2" />
    </svg>
  )
}

export const Sun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14.828 14.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656zM6.343 17.657l-1.414 1.414M6.343 6.343 4.929 4.929M17.657 6.343l1.414-1.414M17.657 17.657l1.414 1.414M4 12H2M12 4V2M20 12h2M12 20v2" />
  </svg>
)

export const EmailIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width={24}
      // height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-5.5 8.28" />
    </svg>
  )
}

export const Password = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6z" />
      <path d="M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 11V7a4 4 0 1 1 8 0v4" />
    </svg>
  )
}

export const LockPassword = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M21 12c-2.4 4-5.4 6-9 6-3.6 0-6.6-2-9-6 2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6" />
    </svg>
  )
}

export const UnlockPassword = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
      <path d="M16.681 16.673A8.717 8.717 0 0 1 12 18c-3.6 0-6.6-2-9-6 1.272-2.12 2.712-3.678 4.32-4.674m2.86-1.146A9.055 9.055 0 0 1 12 6c3.6 0 6.6 2 9 6-.666 1.11-1.379 2.067-2.138 2.87M3 3l18 18" />
    </svg>
  )
}

export const GoogleLogo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M17.788 5.108A9 9 0 1 0 21 12h-8" />
    </svg>
  )
}

export const FacebookLogo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        stroke="none"
        d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2h3z"
      />
    </svg>
  )
}

export const GithubLogo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        stroke="none"
        d="M5.315 2.1c.791-.113 1.9.145 3.333.966l.272.161.16.1.397-.083a13.3 13.3 0 0 1 4.59-.08l.456.08.396.083.161-.1c1.385-.84 2.487-1.17 3.322-1.148l.164.008.147.017.076.014.05.011.144.047a1 1 0 0 1 .53.514 5.2 5.2 0 0 1 .397 2.91l-.047.267-.046.196.123.163c.574.795.93 1.728 1.03 2.707l.023.295L21 9.5c0 3.855-1.659 5.883-4.644 6.68l-.245.061-.132.029.014.161.008.157.004.365-.002.213L16 21a1 1 0 0 1-.883.993L15 22H9a1 1 0 0 1-.993-.883L8 21v-.734c-1.818.26-3.03-.424-4.11-1.878l-.535-.766c-.28-.396-.455-.579-.589-.644l-.048-.019a1 1 0 0 1 .564-1.918c.642.188 1.074.568 1.57 1.239l.538.769c.76 1.079 1.36 1.459 2.609 1.191L8 17.562l-.018-.168a5.03 5.03 0 0 1-.021-.824l.017-.185.019-.12-.108-.024c-2.976-.71-4.703-2.573-4.875-6.139l-.01-.31L3 9.5a5.6 5.6 0 0 1 .908-3.051l.152-.222.122-.163-.045-.196a5.2 5.2 0 0 1 .145-2.642l.1-.282.106-.253a1 1 0 0 1 .529-.514l.144-.047.154-.03z"
      />
    </svg>
  )
}

export const UsernameAvatar = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </svg>
  )
}

export const LogOut = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
      <path d="M9 12h12l-3-3M18 15l3-3" />
    </svg>
  )
}

export const ArrowDown = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export const Search = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6" />
    </svg>
  )
}

export const Close = () => {
  return (
    <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M5.152 5.152a1.2 1.2 0 0 1 1.696 0L12 10.303l5.152-5.151a1.2 1.2 0 1 1 1.696 1.696L13.697 12l5.151 5.152a1.2 1.2 0 0 1-1.696 1.696L12 13.697l-5.152 5.151a1.2 1.2 0 0 1-1.696-1.696L10.303 12 5.152 6.848a1.2 1.2 0 0 1 0-1.696Z" clipRule="evenodd" />
    </svg>
  )
}

export const Home = () => {
  return (
    <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.4 0A2.4 2.4 0 0 0 0 2.4v6.4a2.4 2.4 0 0 0 2.4 2.4h6.4a2.4 2.4 0 0 0 2.4-2.4V2.4A2.4 2.4 0 0 0 8.8 0H2.4Z" />
      <path d="M15.2 0a2.4 2.4 0 0 0-2.4 2.4v6.4a2.4 2.4 0 0 0 2.4 2.4h6.4A2.4 2.4 0 0 0 24 8.8V2.4A2.4 2.4 0 0 0 21.6 0h-6.4Z" />
      <path d="M2.4 12.8A2.4 2.4 0 0 0 0 15.2v6.4A2.4 2.4 0 0 0 2.4 24h6.4a2.4 2.4 0 0 0 2.4-2.4v-6.4a2.4 2.4 0 0 0-2.4-2.4H2.4Z" />
      <path d="M15.2 12.8a2.4 2.4 0 0 0-2.4 2.4v6.4a2.4 2.4 0 0 0 2.4 2.4h6.4a2.4 2.4 0 0 0 2.4-2.4v-6.4a2.4 2.4 0 0 0-2.4-2.4h-6.4Z" />
    </svg>
  )
}

export const Community = () => {
  return (
    <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.125 12a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z" />
      <path d="M10.969 13.875c-1.32-.67-2.777-.938-3.844-.938-2.09 0-6.375 1.282-6.375 3.844v1.969h7.031v-.753c0-.89.375-1.784 1.032-2.528.523-.595 1.256-1.146 2.156-1.594Z" />
      <path d="M15.938 13.5c-2.441 0-7.313 1.508-7.313 4.5v2.25H23.25V18c0-2.992-4.872-4.5-7.313-4.5Z" />
      <path d="M15.938 12a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25Z" />
    </svg>
  )
}

export const Messages = () => {
  return (
    <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.125 2.25H4.875A3.379 3.379 0 0 0 1.5 5.625v9A3.379 3.379 0 0 0 4.875 18H6v3a.75.75 0 0 0 1.23.576L11.52 18h7.605a3.379 3.379 0 0 0 3.375-3.375v-9a3.379 3.379 0 0 0-3.375-3.375ZM7.5 11.625a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    </svg>
  )
}

export const Notification = () => {
  return (
    <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m20.629 15.999-.23-.278c-1.03-1.247-1.655-2-1.655-5.531 0-1.828-.437-3.328-1.3-4.453-.635-.832-1.494-1.462-2.626-1.928a.142.142 0 0 1-.039-.031C14.372 2.414 13.257 1.5 12 1.5c-1.256 0-2.37.914-2.778 2.276a.147.147 0 0 1-.038.03c-2.644 1.09-3.928 3.177-3.928 6.383 0 3.533-.623 4.286-1.655 5.531l-.23.279a1.648 1.648 0 0 0-.217 1.763c.289.61.905.988 1.609.988h14.48c.7 0 1.312-.378 1.602-.985A1.649 1.649 0 0 0 20.629 16Z" />
      <path d="M12 22.5a3.753 3.753 0 0 0 3.303-1.975.187.187 0 0 0-.074-.25.187.187 0 0 0-.092-.025H8.866a.188.188 0 0 0-.167.275 3.753 3.753 0 0 0 3.302 1.975Z" />
    </svg>
  )
}

export const Profile = () => {
  return (
    <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.592 3.027C14.68 2.042 13.406 1.5 12 1.5c-1.414 0-2.692.54-3.6 1.518-.918.99-1.365 2.334-1.26 3.786C7.348 9.67 9.528 12 12 12c2.472 0 4.648-2.33 4.86-5.195.106-1.439-.344-2.78-1.268-3.778Z" />
      <path d="M20.25 22.5H3.75a1.454 1.454 0 0 1-1.134-.522 1.655 1.655 0 0 1-.337-1.364c.396-2.195 1.63-4.038 3.571-5.333C7.574 14.132 9.758 13.5 12 13.5c2.242 0 4.426.633 6.15 1.781 1.94 1.294 3.176 3.138 3.571 5.332.091.503-.032 1-.336 1.365a1.453 1.453 0 0 1-1.135.522Z" />
    </svg>
  )
}

export const Settings = () => {
  return (
    <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
      <path d="m22.05 14.063-.023-.018-1.479-1.16a.756.756 0 0 1-.286-.625v-.542a.75.75 0 0 1 .287-.62l1.479-1.16.022-.018a1.251 1.251 0 0 0 .276-1.597L20.324 4.86a1.259 1.259 0 0 0-1.527-.54l-.017.006-1.739.7a.747.747 0 0 1-.678-.06 8.417 8.417 0 0 0-.469-.275.747.747 0 0 1-.383-.554l-.262-1.856-.006-.034a1.276 1.276 0 0 0-1.239-1.027H9.996a1.262 1.262 0 0 0-1.24 1.05l-.004.026-.262 1.86a.75.75 0 0 1-.38.553 8.21 8.21 0 0 0-.47.273.746.746 0 0 1-.676.06l-1.74-.704-.017-.006a1.26 1.26 0 0 0-1.522.531l-.006.01L1.674 8.34a1.252 1.252 0 0 0 .276 1.598l.023.018 1.479 1.16a.755.755 0 0 1 .286.625v.542a.75.75 0 0 1-.287.62l-1.478 1.16-.023.018a1.25 1.25 0 0 0-.276 1.597l2.002 3.464a1.258 1.258 0 0 0 1.527.54l.017-.006 1.737-.7a.747.747 0 0 1 .678.06c.154.098.31.19.47.275a.747.747 0 0 1 .383.554l.26 1.856.006.034a1.275 1.275 0 0 0 1.242 1.027h4.008a1.262 1.262 0 0 0 1.24-1.05l.005-.026.26-1.86a.75.75 0 0 1 .384-.553 8.32 8.32 0 0 0 .469-.273.747.747 0 0 1 .676-.06l1.74.701.017.007a1.26 1.26 0 0 0 1.529-.542l2.002-3.464a1.251 1.251 0 0 0-.276-1.598Zm-6.304-1.887a3.75 3.75 0 1 1-3.922-3.922 3.76 3.76 0 0 1 3.922 3.922Z" />
    </svg>
  )
}

export const Contact = () => {
  return (
    <svg width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6h11" />
      <path d="M9 12h11" />
      <path d="M9 18h11" />
      <path d="M5 6v.01" />
      <path d="M5 12v.01" />
      <path d="M5 18v.01" />
    </svg>
  )
}

export const Menu = () => {
  return (
    <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  )
}

export const Video = () => {
  return (
    <svg width={18} height={18} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m15 9.999 4.553-2.276A1 1 0 0 1 21 8.617v6.764a1 1 0 0 1-1.447.894L15 13.999v-4Z" />
      <path d="M13 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
    </svg>
  )
}

export const Photo = () => {
  return (
    <svg width={18} height={18} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 8h.01" />
      <path d="M17 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" />
      <path d="m4 14.998 4-4c.456-.439.973-.67 1.5-.67s1.044.231 1.5.67l5 5" />
      <path d="m14 13.998 1-1c.456-.439.973-.67 1.5-.67s1.044.231 1.5.67l2 2" />
    </svg>
  )
}

export const Feeling = () => {
  return (
    <svg width={18} height={18} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    </svg>
  )
}

export const Like = () => {
  return (
    <svg width={22} height={22} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M12 4.457c5.326-5.475 18.64 4.105 0 16.423C-6.64 8.563 6.675-1.018 12 4.457Z" clipRule="evenodd" />
    </svg>
  )
}

export const Comment = () => {
  return (
    <svg width={22} height={22} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4.941a2.5 2.5 0 0 0-2.5-2.5h-15a2.5 2.5 0 0 0-2.5 2.5v10a2.5 2.5 0 0 0 2.5 2.5h11.983c.331 0 .649.132.883.367l3.567 3.566A.625.625 0 0 0 22 20.933V4.94ZM6.375 6.191h11.25a.625.625 0 1 1 0 1.25H6.375a.625.625 0 0 1 0-1.25Zm0 3.125h11.25a.625.625 0 1 1 0 1.25H6.375a.625.625 0 0 1 0-1.25Zm0 3.125h6.25a.624.624 0 1 1 0 1.25h-6.25a.625.625 0 0 1 0-1.25Z" />
    </svg>
  )
}

export const Share = () => {
  return (
    <svg width={22} height={22} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81C3.011 18.54 3 18.27 3 18 3 12.477 7.477 8 13 8V3l10 8-10 8v-5Z" />
    </svg>
  )
}

export const Send = () => {
  return (
    <svg width={22} height={22} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.946 9.313c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638L16.273 22.04c-.15.529-.455.547-.68.045L12 13.998l6-8-8 6-8.054-2.685Z" />
    </svg>
  )
}

export const Upload = () => {
  return (
    <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 18.003a4.815 4.815 0 0 1-3.326-1.318 4.403 4.403 0 0 1-1.378-3.182c0-1.193.496-2.338 1.378-3.182A4.815 4.815 0 0 1 7 9.003c.295-1.313 1.157-2.466 2.397-3.207a5.971 5.971 0 0 1 2.025-.749 6.223 6.223 0 0 1 2.19.006c.722.131 1.408.39 2.02.76a5.36 5.36 0 0 1 1.543 1.397c.408.553.69 1.172.832 1.823.142.65.14 1.32-.007 1.97h1a3.5 3.5 0 0 1 0 7h-1" />
      <path d="m9 15 3-3 3 3" />
      <path d="M12 12v9" />
    </svg>
  )
}

export const LinkUrl = () => {
  return (
    <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M15.103 5.503a2.4 2.4 0 1 1 3.394 3.394l-3.6 3.6a2.4 2.4 0 0 1-3.394 0 1.2 1.2 0 0 0-1.697 1.697 4.8 4.8 0 0 0 6.788 0l3.6-3.6a4.8 4.8 0 0 0-6.788-6.788l-1.8 1.8a1.2 1.2 0 1 0 1.697 1.697l1.8-1.8Zm-6 6a2.4 2.4 0 0 1 3.394 0 1.2 1.2 0 1 0 1.697-1.697 4.8 4.8 0 0 0-6.788 0l-3.6 3.6a4.8 4.8 0 1 0 6.788 6.788l1.8-1.8a1.2 1.2 0 1 0-1.697-1.697l-1.8 1.8a2.399 2.399 0 1 1-3.394-3.394l3.6-3.6Z" clipRule="evenodd" />
    </svg>
  )
}

export const Location = () => {
  return (
    <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M6.06 4.86a8.4 8.4 0 0 1 11.88 11.88L12 22.68l-5.94-5.94a8.4 8.4 0 0 1 0-11.88ZM12 13.2a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z" clipRule="evenodd" />
    </svg>
  )
}