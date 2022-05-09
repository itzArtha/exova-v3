import TextWithUnderscore from "../TextWithUnderscore";

const MenuOffer = ({ pages }) => {
  return (
    <>
      <div className={"flex justify-center mb-4"}>
        <div className={"flex gap-8"}>
          <TextWithUnderscore initialValue={pages} textName={"price"}>
            1. Harga
          </TextWithUnderscore>
          <TextWithUnderscore initialValue={pages} textName={"description"}>
            2. Deskripsi
          </TextWithUnderscore>
          <TextWithUnderscore initialValue={pages} textName={"result"}>
            3. Hasil
          </TextWithUnderscore>
          <TextWithUnderscore initialValue={pages} textName={"sent"}>
            4. Kirim
          </TextWithUnderscore>
        </div>
      </div>
    </>
  );
};
export default MenuOffer;
