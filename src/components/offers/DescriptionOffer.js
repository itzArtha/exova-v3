import MainTextInput from "../forms/MainTextInput";
import MainTextArea from "../forms/MainTextArea";

const DescriptionOffer = ({
  offerDetail,
  setDescriptionCallback,
  setNameCallback,
  setRevisionCallback,
}) => {
  return (
    <>
      <div>
        <div className={"flex gap-2"}>
          <div className={"w-full"}>
            <MainTextInput
              onChange={(e) => {
                setNameCallback({ projectName: e.target.value });
              }}
              errorMsg={offerDetail.projectNameErrorMsg}
              value={offerDetail.projectName}
              placeholder={"Video cinematic"}
              label={"Nama Proyek"}
            />
          </div>
          <div>
            <MainTextInput
              onChange={(e) => {
                setRevisionCallback({ maximumRevision: e.target.value });
              }}
              value={offerDetail.maximumRevision}
              placeholder={"1"}
              label={"Maksimal Revisi"}
            />
          </div>
          <h1 className={"my-auto pt-6"}>Kali</h1>
        </div>
        <MainTextArea
          onChange={(e) => {
            setDescriptionCallback({ projectDescription: e.target.value });
          }}
          errorMsg={offerDetail.projectDescriptionErrorMsg}
          value={offerDetail.projectDescription}
          totalCharacter={0}
          maxCharacter={1818}
          label={"Deskripsi Proyek"}
        />
      </div>
    </>
  );
};
export default DescriptionOffer;
