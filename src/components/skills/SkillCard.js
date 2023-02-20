import skills from "./skillData.js";

export default function SkillCard() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-center">
      {skills.map((skill, index) => (
        <div
          id={index}
          className="card-body  rounded overflow-hidden shadow-lg hover:bg-gray-300"
        >
          <iconify-icon
            icon={skill.icon}
            width="100"
            hight="100"
            style={{ color: "green" }}
          ></iconify-icon>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-700">
              {skill.name}
            </div>
            <h6 className="card-subtitle mb-2 text-muted">Skills:</h6>
            <p className="text-gray-700 text-base font-bold">
              {skill.frontendSkills}
              {skill.skills}
            </p>
            <p className="text-gray-700 mt-3 text-base">
              {skill.backendSkills ? (
                <h6 className="card-subtitle mb-2 text-muted">
                  Backend Skills:
                </h6>
              ) : null}
              <p className="text-gray-700 text-base font-bold">
                {skill.backendSkills}
              </p>
              <h6 className="card-subtitle mt-3 mb-2 text-muted">
                {skill.devTools ? "Dev Tools:" : null}
              </h6>
              <p className="text-gray-700 text-base font-bold">
                {skill.devTools}
              </p>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// md:grid-cols-2
// max-w-sm
