const SentOffer = ({ offerDetail }) => {
  return (
    <>
      <div className={"my-3"}>
        <h1 className={"text-lg font-medium"}>Nama Proyek</h1>
        <p className={"text-base font-normal text-gray-600"}>
          {offerDetail.projectName}
        </p>
      </div>
      <div className={"my-3"}>
        <h1 className={"text-lg font-medium"}>Deskripsi Proyek</h1>
        <p className={"text-base font-normal text-gray-600"}>
          {offerDetail.projectDescription}
        </p>
      </div>
      <div className={"my-3"}>
        <h1 className={"text-lg font-medium"}>Maksimal Revisi</h1>
        <p className={"text-base font-normal text-gray-600"}>
          {offerDetail.maximumRevision} Kali
        </p>
      </div>
      <div className={"my-3"}>
        <h1 className={"text-lg font-medium"}>Harga</h1>
        <p className={"text-base font-normal text-gray-600"}>
          {offerDetail.projectPrice}
        </p>
      </div>
      <div className={"my-3"}>
        <h1 className={"text-lg font-medium"}>Waktu Pelaksanaan</h1>
        <p className={"text-base font-normal text-gray-600"}>
          {offerDetail.projectStartAt} - {offerDetail.projectEndAt}
        </p>
      </div>
    </>
  );
};
export default SentOffer;
