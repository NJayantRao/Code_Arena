import React from 'react'
import { getDifficultyBadge } from '../../../lib/difficulty'
import { ChevronRightIcon, Code2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ProblemCard = ({id,title,difficulty,category,description}) => {
  const navigate= useNavigate()
  return (
    <div
                key={id}
                className="card bg-base-100 hover:scale-102 transition-transform "
              >
                <div className="card-body">
                  <div className="flex items-center justify-between gap-4">
                    {/* LEFT SIDE */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-12 rounded-lg bg-green-600/10 flex items-center justify-center">
                          <Code2Icon className="size-6 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-xl font-bold">{title}</h2>
                            <span
                              className={`badge ${getDifficultyBadge(
                            difficulty
                              )} font-semibold`}
                            >
                              {difficulty}
                            </span>
                          </div>
                          <p className="text-sm text-base-content/60">
                            {" "}
                            {category}
                          </p>
                        </div>
                      </div>
                      <p className="text-base-content/80 mb-3">
                        {description.text}
                      </p>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-2 text-green-600 cursor-pointer" onClick={()=>{
                      navigate(`/problem/${id}`)
                      
                      
                    }}>
                      <span className="font-medium">Solve</span>
                      <ChevronRightIcon className="size-5" />
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default ProblemCard