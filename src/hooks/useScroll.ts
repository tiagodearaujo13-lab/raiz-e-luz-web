import { useState, useEffect } from "react";

/**
 * Hook customizado para detectar se a página foi rolada além de um limite (threshold)
 * @param threshold Altura em pixels para ativar o estado
 * @returns boolean
 */
export function useScroll(threshold = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Adiciona o listener
    window.addEventListener("scroll", handleScroll);

    // Clean up: remove o listener quando o componente é desmontado
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
