
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, formatDistanceToNow } from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return format(new Date(date), 'MMM dd, yyyy • HH:mm')
}

export function formatRelativeTime(date: string | Date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

export function getAlertColorByStatus(status: string) {
  switch (status) {
    case 'active':
      return 'bg-safety-secondary text-white';
    case 'investigating':
      return 'bg-safety-yellow text-safety-dark';
    case 'resolved':
      return 'bg-safety-green text-white';
    case 'false_alarm':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
}

export function getAlertColorBySeverity(severity: string) {
  switch (severity) {
    case 'high':
      return 'text-safety-secondary';
    case 'medium':
      return 'text-safety-yellow';
    case 'low':
      return 'text-safety-blue';
    default:
      return 'text-muted-foreground';
  }
}

export function getSeverityIcon(severity: string) {
  switch (severity) {
    case 'high':
      return '🔴';
    case 'medium':
      return '🟠';
    case 'low':
      return '🟡';
    default:
      return '⚪';
  }
}

export function getGenderRatio(men: number, women: number) {
  const total = men + women;
  if (total === 0) return { menPercent: 0, womenPercent: 0 };
  
  const menPercent = Math.round((men / total) * 100);
  const womenPercent = 100 - menPercent;
  
  return { menPercent, womenPercent };
}

export function getRiskLevel(score: number) {
  if (score >= 80) return { label: 'High Risk', color: 'text-safety-secondary' };
  if (score >= 50) return { label: 'Medium Risk', color: 'text-safety-yellow' };
  return { label: 'Low Risk', color: 'text-safety-green' };
}
