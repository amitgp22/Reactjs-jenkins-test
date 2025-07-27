import {memo} from 'react'

 function Header() {
    console.log('Headre Rendered');
  return (
    <>
      <h2>Header</h2>
    </>
  )
}
export default memo(Header)