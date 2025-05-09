
import ButtonNavLink from "./ButtonNavLink"

const buttonProps = {
  text: "Contact Us",
  href: "",
  fontSize: "font-4",
  onClick: () => { },
  classname: "bg-amber-400! [&_span]:text-black! px-[14px] py-2.5! font-medium hover:bg-white!"

}

const ButtonNavColor = () => {
  return (
    <div>
      <ButtonNavLink text={buttonProps.text} href={buttonProps.href} fontSize={buttonProps.fontSize} classname={buttonProps.classname} onClick={buttonProps.onClick} />
    </div>
  )
}

export default ButtonNavColor
