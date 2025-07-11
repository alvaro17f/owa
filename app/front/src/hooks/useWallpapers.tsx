import { useEffect, useState } from "react";

export const useWallpapers = () => {
  const [wallpapers, setWallpapers] = useState<string[]>([]);

  const getWallpapers = async () => {
    const result: string = await webui.get_wallpapers();
    const walls = result.split(/\s+/).filter(Boolean);
    setWallpapers(walls);
  };

  const setWallpaper = (wallpaper: string) => {
    webui.set_wallpaper(wallpaper);
  };

  const setRandomWallpaper = () => {
    const randomWallpaper = Math.floor(Math.random() * wallpapers.length);
    setWallpaper(wallpapers[randomWallpaper]);
  };

  useEffect(() => {
    setTimeout(() => {
      getWallpapers();
    }, 100);
  }, []);

  return { wallpapers, setWallpaper, setRandomWallpaper };
};
