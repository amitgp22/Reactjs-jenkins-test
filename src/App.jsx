import React, {useEffect, useRef} from 'react';
const App = () => {
 const inputElRef = useRef(null)
useEffect(()=>{
inputElRef.current.focus()
}, [])
return(
<div>
<input
defaultValue={'Won\'t focus'}
/>
<input
ref={inputElRef}
defaultValue={'Will focus on the input box'}
/>
</div>
)
}
export default App;

