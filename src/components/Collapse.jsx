export default function CollapseComp({ details }) {
    return (
        <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                {/* <i class="fa-solid fa-angle-down"></i> */}
            </div>
            <div className="collapse-content">
                <p className="">
                    {details.description}
                </p>
                <p className="font-light italic">
                    Stack: {details.tech}
                </p>

            </div>

        </div>
    )
}