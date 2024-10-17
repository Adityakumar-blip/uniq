import Spline from "@splinetool/react-spline";

export default function Flow() {
  return (
    <main className="h-[30rem] w-[400px]">
      <div className="w-full h-full rounded-md">
        <Spline
          scene="https://prod.spline.design/93Fo-tDkVXshZIRW/scene.splinecode"
          width={100}
          height={50}
        />
        <div className="text-xs text-right w-full">
          <p>
            cubes by{" "}
            <a href="https://app.spline.design/@kamilkoziel">@kamilkoziel</a>
          </p>
        </div>
      </div>
    </main>
  );
}
