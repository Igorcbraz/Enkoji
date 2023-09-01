import React from 'react'
import classNames from 'classnames'

export const RoundIcon = ({
  icon: Icon,
  iconColorClass = 'text-primary-600',
  bgColorClass = 'bg-primary-100 ',
  iconClassName = 'w-5 h-5',
  className,
}) => {
  const baseStyle = 'p-3 rounded-full'

  const cls = classNames(baseStyle, iconColorClass, bgColorClass, className)
  return (
    <div className={cls}>
      <Icon className={iconClassName} />
    </div>
  )
}

