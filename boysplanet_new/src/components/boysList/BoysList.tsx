import { BoysListProps } from "@/pages/vote";
import styled from "@emotion/styled";

const BoysNameStyle = styled.li`
    width: 25%;
    padding: 5px;
    position: relative;
    label {
        text-align: center;
        input[type="checkbox"] {
            appearance: none;
            width: 100%;
            height: 60px;
            padding: 5px 0;
            border-radius: 5px;
            &:hover {
                background: #ffffff0e;
            }
            &.korea {
                border: 2px solid #3395fe;
                &:checked {
                    background: #3395fe;
                }
            }
            &.global {
                border: 2px solid #d74696;
                &:checked {
                    background: #d74696;
                }
            }
        }
        .labeling {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            left: 0;
            color: #fff;
            p {
                span {
                    font-size: 17px;
                }
                .second {
                    font-size: 11px;
                }
            }
        }
    }
`;

interface BoysProps {
    boys: BoysListProps;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    boysSelect: string[] | string;
}

export default function BoysList({ boys, onChange, boysSelect }: BoysProps) {
    return (
        <BoysNameStyle key={boys.boysEName}>
            <label>
                <input
                    type="checkbox"
                    onChange={onChange}
                    checked={boysSelect.includes(boys.boysKName)}
                    name={boys.boysKName}
                    className={boys.boysType === 0 ? "korea" : "global"}
                    value={boys.boysNum}
                />
                <div className="labeling">
                    <p>
                        <span>
                            {boys.boysKName}
                            <br />
                        </span>
                        <span className="second">
                            {boys.boysEName}
                            <br />
                        </span>
                    </p>
                </div>
            </label>
        </BoysNameStyle>
    );
}
