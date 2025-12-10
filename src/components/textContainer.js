function TextContainer({ title, body, bodyh3 }) {
  return (
    <div className="flex flex-col gap-[0.5rem] w-full md:w-[70%] lg:w-[64%]">
      <h2>{title ?? "no title"}</h2>
      {bodyh3 == null ? (
        <p className="text-[#181818]">{body ?? "no body"}</p>
      ) : (
        <h3 className="text-[#181818] mt-[1rem]">{bodyh3 ?? "no body"}</h3>
      )}
    </div>
  );
}

export default TextContainer;