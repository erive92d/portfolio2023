/* eslint-disable react/prop-types */
export default function CollapseComp({ details }) {
    return (
        <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                {/* <i class="fa-solid fa-angle-down"></i> */}
            </div>
            <div className="collapse-content space-y-6">
                <div className="flex gap-2 py-2">
                    <a href={details.link} target="__blank" className="btn btn-sm btn-success">Demo</a>
                    <a href={details.git} target="__blank" className="btn btn-sm btn-primary">Git</a>

                </div>

                <p className="">
                    {details.description}
                </p>
                <div className="card-actions">
                    <div className="text-sm italic">{details.tech}</div>
                </div>

            </div>

        </div>
    )
}