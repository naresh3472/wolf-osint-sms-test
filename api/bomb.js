
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      status: "error",
      message: "Use POST"
    });
  }

  const { number } = req.body || {};

  // Test only with a reserved dummy number.
  if (number !== "0000000000") {
    return res.status(400).json({
      status: "error",
      message: "Use the documented test number only."
    });
  }

  return res.status(200).json({
    status: "success",
    branding: "Wolf OSINT",
    mode: "safe-test",
    message: "API endpoint is working.",
    sms_sent: false
  });
};
