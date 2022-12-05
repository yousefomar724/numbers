import { useEffect } from "react"

const Ad = () => {
  let googleKey = "" // xxxxxxxxxx take it from google adsense

  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [].push({})
  }, [])

  return (
    <div className="py-6 lg:py-12 px-10 lg:px-10 mx-auto font-cairo">
      <div className="flex items-center justify-center text-center py-10 lg:py-16 border border-gray-600 max-w-6xl mx-auto bg-gray-300 text-gray-800 text-4xl lg:text-5xl font-semibold">
        {googleKey ? (
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={`ca-pub-${googleKey}`}
            data-ad-slot={googleKey}
            data-ad-format="auto"
          />
        ) : (
          <span>إعلان</span>
        )}
      </div>
    </div>
  )
}

export default Ad
