const twSmallClasses = "rounded-lg px-5 px-16 text-md py-2";
const twNormalClasses = "rounded-lg px-7 text-md py-3";
const twLargeClasses = "rounded-lg px-9 text-xl py-4";
const solidVariant = "bg-primary-main border-none";
const borderedVaraint = "bg-transparent border border-2 border-primary-main"


const Button = ({variant, size, fullWidth = false, btnType, onClick, children}) => {

    const selectedSizeClasses = size === "small" ? twSmallClasses : size === "large" ? twLargeClasses : twNormalClasses;
    const selectedVariantClasses = variant === "secondary" ? borderedVaraint : solidVariant;


    return ( <button className={`${selectedVariantClasses} text-white font-semibold ${selectedSizeClasses} ${fullWidth && 'w-full'}`}>
        {children}
    </button> );
}
 
export default Button;