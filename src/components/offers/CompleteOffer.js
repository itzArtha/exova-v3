const CompleteOffer = () => {
  return (
    <>
      <div>
        <img
          className={"w-1/4 mx-auto"}
          src={process.env.PUBLIC_URL + "/icons/complete.svg"}
          alt={"Icon"}
        />
        <p className={"text-center mt-8"}>
          Berhasil mengirim tawaran pekerjaan
        </p>
      </div>
    </>
  );
};
export default CompleteOffer;
