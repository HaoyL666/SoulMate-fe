export default function AuthInput({
    name,
    type,
    placeholder,
    register,
    error,
}) {
    return (
        <div className="mt-8 content-center dark:text-dark_text_1 space-y-1">
            <label htmlFor={name} className="text-sm font-bold tracking-wide" >
                {placeholder}
            </label>
            <input style={{ color: 'black' }}
                className="w-full dark:bg-dark_bg_3 text-base py-2 px-4 rounded-2xl outline-none text-black"
                type={type}
                placeholder={placeholder}
                {...register(name)}
            />
            {error && <p className="text-red-400">{error}</p>}
        </div>
    );
}