import useWindowWidth from "./useWindowWidth"


export default function LayoutComponentOne() {
  const onSmallScreen = useWindowWidth(786);
  return (
    <div>
        <h2>You are browsing in {onSmallScreen?'small':'large'} device</h2>
    </div>
  )
}
