"use client";

import ModalLayout from "@/components/modal-layout";
import Image from "next/image";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./add-product-review.scss";

const schema = yup
  .object({
    title: yup.string().label("Title").required("Please enter review title."),
    description: yup
      .string()
      .label("Description")
      .required("Please enter review details."),
  })
  .required();

type Props = {
  productId: number;
  image: string;
  title: string;
  show: boolean;
  handleClose: () => void;
};
export default function AddProductReview({
  productId,
  image,
  title,
  show,
  handleClose,
}: Props) {
  const [selectedStar, setSelectedStar] = useState(3);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const [formSubmit, setFormSubmit] = useState(false);

  const uploadImage = (e: any) => {
    const files = e.target.files;
    console.log("uploadImage", e.target.files);
    let uploadFileData: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      //   const data = new Promise((resolve, reject) => {
      //     const fileReader = new FileReader();
      //     fileReader.readAsDataURL(file);
      //     fileReader.onload = () => {
      //       resolve(fileReader.result);
      //     };
      //     fileReader.onerror = (error) => {
      //       reject(error);
      //     };
      //   });
      const blobURL = URL.createObjectURL(file);
      uploadFileData.push(blobURL);
    }
    console.log(uploadFileData);
    setUploadedPhotos((val) => [...val, ...uploadFileData]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setFormSubmit(true);
    // await fetch("/api/review-submit", {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     ...data,
    //     id: productId,
    //   }),
    // })
    //   .then((res) => {
    //     console.log("contact done", res);
    //     setFormSubmit(false);
    //     handleClose();
    //   })
    //   .catch((error) => {
    //     console.log("contact error", error);
    //     setFormSubmit(false);
    //   });
    setFormSubmit(false);
    handleClose();
  };

  return (
    <ModalLayout show={show} handleClose={handleClose}>
      <form
        className="add-product-review"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="close-div">
          <Image
            src="/images/svg/close-gray.svg"
            width={15}
            height={15}
            alt="close"
            className="close-icon"
            title="Close"
            onClick={handleClose}
          />
        </div>
        <h4>Add Review</h4>
        <div className="row product-detail">
          <div className="col-3">
            <Image src={image} fill className="image" alt={`seller`} priority />
          </div>
          <div className="col-9 title-box">
            <h6>{title}</h6>
          </div>
        </div>
        <div className="star-box">
          <Image
            src={`/images/svg/${selectedStar >= 1 ? "dark" : "light"}-star.svg`}
            alt={"rating star 1"}
            width="34"
            height="34"
            onClick={() => setSelectedStar(1)}
          />
          <Image
            src={`/images/svg/${selectedStar >= 2 ? "dark" : "light"}-star.svg`}
            alt={"rating star 2"}
            width="34"
            height="34"
            onClick={() => setSelectedStar(2)}
          />
          <Image
            src={`/images/svg/${selectedStar >= 3 ? "dark" : "light"}-star.svg`}
            alt={"rating star 3"}
            width="34"
            height="34"
            onClick={() => setSelectedStar(3)}
          />
          <Image
            src={`/images/svg/${selectedStar >= 4 ? "dark" : "light"}-star.svg`}
            alt={"rating star 4"}
            width="34"
            height="34"
            onClick={() => setSelectedStar(4)}
          />
          <Image
            src={`/images/svg/${selectedStar >= 5 ? "dark" : "light"}-star.svg`}
            alt={"rating star 5"}
            width="34"
            height="34"
            onClick={() => setSelectedStar(5)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="review-title" className="form-label">
            Add Title
          </label>
          <input
            type="text"
            className="form-control"
            id="review-title"
            aria-describedby="review-title"
            {...register("title")}
          />
          <div
            id="review-title"
            className="form-text text-danger"
            style={{ color: "red" }}
          >
            {errors.title?.message || ""}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="upload-photos" className="form-label">
            Add Photos
          </label>
          <div className="row">
            <div className="col-2">
              <div className="image-upload-box">
                <Image
                  src="/images/svg/image-upload.svg"
                  width="35"
                  height="32"
                  alt="image upload"
                  title="Upload image"
                  onClick={() => {
                    const inputField = document.getElementById("uploadPhotos");
                    inputField?.click();
                  }}
                />
                <input
                  type="file"
                  id="uploadPhotos"
                  style={{ display: "none" }}
                  name="uploadPhotos"
                  accept="image/png,image/jpeg,image/jpg"
                  hidden
                  multiple
                  onChange={uploadImage}
                />
              </div>
            </div>
            {uploadedPhotos &&
              uploadedPhotos.map((val, index) => (
                <div className="col-2" key={`photos-${index}`}>
                  <div className="photos-image-box">
                    <Image
                      src={val}
                      fill
                      className="image"
                      alt={`photos`}
                      priority
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="review-description" className="form-label">
            Write Your Review
          </label>
          <textarea
            className="form-control"
            id="review-description"
            rows={5}
            {...register("description")}
          />
          <div
            id="review-description"
            className="form-text text-danger"
            style={{ color: "red" }}
          >
            {errors.description?.message || ""}
          </div>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary text-white rounded-pill d-flex justify-content-center"
            disabled={formSubmit}
          >
            Submit Review{" "}
            {formSubmit && (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </button>
        </div>
      </form>
    </ModalLayout>
  );
}
