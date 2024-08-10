import matplotlib.pyplot as plt
import numpy as np

# Data
time = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14])
concentration = np.array([0, 1.5, 7.5, 12, 15, 12, 9, 6, 4.5, 3.3, 2.25, 0.9, 0])

# E curve
plt.plot(time, concentration)
plt.xlabel("Time (min)")
plt.ylabel("Concentration (μmol/liter)")
plt.title("E Curve")
plt.grid(True)
plt.show()

# F curve
plt.plot(concentration, time)
plt.xlabel("Concentration (μmol/liter)")
plt.ylabel("Time (min)")
plt.title("F Curve")
plt.grid(True)
plt.show()

# Mean residence time
mean_residence_time = np.trapz(concentration, time) / concentration.max()
print("Mean residence time:", mean_residence_time)

# Variance
variance = np.trapz((time - mean_residence_time)**2 * concentration, time) / concentration.max()
print("Variance:", variance)

# Skewness
skewness = np.trapz((time - mean_residence_time)**3 * concentration, time) / (concentration.max() * variance**1.5)
print("Skewness:", skewness)

# Conversion in CSTR
CA0 = CB0 = 0.0313
k = 176
tau = mean_residence_time
Xcstr = 1 - np.exp(-k * CA0**2 * tau)
print("Conversion in CSTR:", Xcstr)

# Conversion in PFR
Xpf = 1 - (1 + k * CA0 * tau)**(-1)
print("Conversion in PFR:", Xpf)

# Maximum segregation model
Xmaxseg = 1 - np.exp(-k * CA0**2 * tau**2 / 2)
print("Conversion in Maximum Segregation Model:", Xmaxseg)

# Tanks in Series model
N = int(np.ceil(tau / variance))
Xcstr_series = 1 - np.exp(-k * CA0**2 * tau / N)
Xseries = 1 - (1 - Xcstr_series)**N
print("Conversion in Tanks in Series Model:", Xseries)