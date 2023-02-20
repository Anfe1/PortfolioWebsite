export default function Footer() {
  return (
    <div className="py-4 text-center bg-dark-500 text-white">
      <div>
        <ul className="flex mt-2 gap-4 items-center justify-center">
          <li>
            <a href="https://github.com/Anfe1" target="_blank" rel="noreferrer">
              <iconify-icon
                icon="fluent-mdl2:git-hub-logo"
                height="45"
                style={{ color: "#c0ebe4" }}
              ></iconify-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andy-w-fernandez/"
              target="_blank"
              rel="noreferrer"
            >
              <iconify-icon
                icon="ion:social-linkedin"
                height="45"
                style={{ color: "#c0ebe4" }}
              ></iconify-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
