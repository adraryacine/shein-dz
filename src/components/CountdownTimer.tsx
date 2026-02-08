import { useCountdown } from '@/hooks/useCountdown';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: string | Date;
  className?: string;
  variant?: 'default' | 'compact' | 'large';
  showDays?: boolean;
}

export const CountdownTimer = ({
  targetDate,
  className,
  variant = 'default',
  showDays = true,
}: CountdownTimerProps) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className={cn("text-destructive font-semibold", className)}>
        Expiré
      </div>
    );
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center gap-1 font-mono font-bold text-lg", className)}>
        {showDays && days > 0 && (
          <>
            <span className="text-gradient">{formatNumber(days)}</span>
            <span className="text-muted-foreground">j</span>
          </>
        )}
        <span className="text-gradient">{formatNumber(hours)}</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-gradient">{formatNumber(minutes)}</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-gradient animate-countdown-tick">{formatNumber(seconds)}</span>
      </div>
    );
  }

  if (variant === 'large') {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        {showDays && (
          <TimeBlock value={days} label="Jours" />
        )}
        <TimeBlock value={hours} label="Heures" />
        <TimeBlock value={minutes} label="Min" />
        <TimeBlock value={seconds} label="Sec" animate />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {showDays && days > 0 && (
        <TimeBlock value={days} label="J" size="sm" />
      )}
      <TimeBlock value={hours} label="H" size="sm" />
      <TimeBlock value={minutes} label="M" size="sm" />
      <TimeBlock value={seconds} label="S" size="sm" animate />
    </div>
  );
};

interface TimeBlockProps {
  value: number;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const TimeBlock = ({ value, label, size = 'md', animate }: TimeBlockProps) => {
  const sizeClasses = {
    sm: 'countdown-box px-2 py-1 min-w-[45px]',
    md: 'countdown-box',
    lg: 'countdown-box px-4 py-3 min-w-[80px]',
  };

  const numberClasses = {
    sm: 'text-lg font-bold text-gradient',
    md: 'countdown-number',
    lg: 'text-4xl font-bold text-gradient',
  };

  const labelClasses = {
    sm: 'text-[8px] uppercase tracking-wider text-muted-foreground',
    md: 'countdown-label',
    lg: 'text-xs uppercase tracking-wider text-muted-foreground mt-1',
  };

  return (
    <div className={sizeClasses[size]}>
      <div className={cn(numberClasses[size], animate && 'animate-countdown-tick')}>
        {value.toString().padStart(2, '0')}
      </div>
      <div className={labelClasses[size]}>{label}</div>
    </div>
  );
};

export default CountdownTimer;
