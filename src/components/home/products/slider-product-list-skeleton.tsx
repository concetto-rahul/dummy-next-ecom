type Props = {
  count: number;
};

export default function SliderProductListSkeleton({ count }: Props) {
  return (
    <div className="row">
      {[...Array(count)].map((_, index) => (
        <div key={`product-${index}`} className="col-3">
          <div
            className="card"
            aria-hidden="true"
            style={{ borderRadius: "20px" }}
          >
            <span
              className="placeholder"
              style={{
                width: "100%",
                height: "220px",
                borderRadius: "20px 20px 0 0",
              }}
            ></span>
            <div className="card-body">
              <p className="card-text placeholder-glow mb-1">
                <span className="placeholder col-12"></span>
                <span className="placeholder col-12"></span>
                <span className="placeholder col-8"></span>
              </p>
              <p className="card-text placeholder-glow mb-1">
                <span className="placeholder col-6"></span>
              </p>
              <p className="card-text placeholder-glow mb-0">
                <span className="placeholder col-9"></span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
